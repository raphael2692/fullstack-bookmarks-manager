from sqlalchemy.orm import Session

from . import models, schemas


def get_bookmarks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Bookmark).offset(skip).limit(limit).all()

def get_bookmark(db: Session, id:int):
    return db.query(models.Bookmark).get(id)

def create_bookmark(db: Session, item: schemas.BookmarkCreate):
    db_item = models.Bookmark(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item