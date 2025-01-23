from fastapi import FastAPI, Request


app = FastAPI()

@app.get("/hello")
async def add_device(request: Request):
    print("Hello")
    return {"Hello": "World"}
