from sqlalchemy import Boolean, Column, ForeignKey, Integer, String

from .database import Base

class Bookmark(Base):
    __tablename__ = "bookmarks"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    url = Column(String, index=True)

