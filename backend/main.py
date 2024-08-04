from fastapi import FastAPI
from pymongo import MongoClient
from pydantic import BaseModel

app = FastAPI()

# client = MongoClient("mongodb://localhost:27017/")
# db = client.mydatabase


@app.get("/")
def main():
    return "Hello"


@app.get("/workouts")
async def read_workouts():
    return {"w1": "Chest and Back", "w2": "Arms"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
