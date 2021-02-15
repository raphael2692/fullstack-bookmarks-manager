from typing import List, Optional

from pydantic import BaseModel


# models/schemas base
class BookmarkBase(BaseModel):
    name: str
    url: str

class BookmarkCreate(BookmarkBase):
    pass

# models/schemas for reading/returning
class Bookmark(BookmarkBase):
    id: int

    class Config:
        orm_mode = True

