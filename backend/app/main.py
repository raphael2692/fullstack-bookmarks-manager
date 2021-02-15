from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS 
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:80",
    "http://localhost:8000",
    "http://localhost:3000",
    "https://localhost:8080",
    "https://localhost:80",
    "https://localhost:8000",
    "https://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load db
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Path operations / Endpoints

# Create item
@app.post("/bookmarks/", response_model=schemas.Bookmark)
def create_bookmark(
    bookmark: schemas.BookmarkCreate, db: Session = Depends(get_db)
):
    return crud.create_bookmark(db=db, item=bookmark)

# Get items
@app.get("/bookmarks/", response_model=List[schemas.Bookmark])
def read_bookmarks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_bookmarks(db, skip=skip, limit=limit)
    return items

# Get item by id
@app.get("/bookmarks/{id}", response_model=schemas.Bookmark)
def read_bookmark(id:int, db: Session = Depends(get_db)):
    item = crud.get_bookmark(db=db, id=id)
    return item

@app.delete("/bookmarks/{id}", response_model=schemas.Transaction)
def delete_bookmark(id:int, db: Session = Depends(get_db)):
    msg = crud.delete_bookmark(db=db, id=id)
    return msg