from functools import lru_cache
import os

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from supabase import Client, create_client

app = FastAPI(title="JiakNUS API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@lru_cache
def get_supabase() -> Client:
    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_KEY")

    if not url or not key:
        raise RuntimeError("Missing SUPABASE_URL or SUPABASE_KEY")
    
    return create_client(url, key)

@app.get("/check")
def check():
    return {"status": "ok",
            "message": "Backend is running"}

@app.get("/canteens")
def get_canteens():
    try:
        supabase = get_supabase()
        response = supabase.table("canteens").select("*").execute()
        return response.data
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))
    
@app.get("/stalls")
def get_stalls(canteen_id: int | None = Query(default=None)):
    try:
        supabase = get_supabase()
        query = supabase.table("stalls").select("*")

        if canteen_id is not None:
            query = query.eq("canteen_id", canteen_id)
        
        response = query.execute()
        return response.data
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))
    
@app.get("/menu-items")
def get_menu_items(stall_id: int | None = Query(default=None)):
    try:
        supabase = get_supabase()
        query = supabase.table("menu_items").select("*")

        if stall_id is not None:
            query = query.eq("stall_id", stall_id)
        
        response = query.execute()
        return response.data
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))