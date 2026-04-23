from fastapi import FastAPI

app = FastAPI()

@app.post("/pay")
def pay(data: dict):
    print("Processing payment")
    return {"status": "paid"}

@app.post("/refund")
def refund(data: dict):
    print("Refund issued")
    return {"status": "refunded"}
