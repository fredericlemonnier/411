from fastapi import FastAPI
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import router as book_router

config = dotenv_values(".env")

app = FastAPI()


client = pymongo.MongoClient("mongodb+srv://cs411:<password>@cs411.0suyfaw.mongodb.net/?retryWrites=true&w=majority")
db = client.test


@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["https://data.mongodb-api.com/app/data-mqpbv/endpoint/data/v"])
    app.database = app.mongodb_client[config["cs411"]]

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

app.include_router(book_router, tags=["books"], prefix="/book")

