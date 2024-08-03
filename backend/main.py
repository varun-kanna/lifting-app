from fastapi import FastAPI
from pymongo import MongoClient
from pydantic import BaseModel

app = FastAPI()

# client = MongoClient("mongodb://localhost:27017/")
# db = client.mydatabase


# class Item(BaseModel):
#     name: str
#     description: str


@app.get("/")
def main():
    return "Hello"


# @app.post("/items/")
# async def create_item(item: Item):
#     db.items.insert_one(item.dict())
#     return item


@app.get("/items")
async def read_items():
    # items = list(db.items.find())
    return {"name": "Varun"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
