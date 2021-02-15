from fastapi.testclient import TestClient
from .main import app

client = TestClient(app)

def test_read_bookmarks():
    response = client.get("/bookmarks/")
    response_body = response.json()
    print(response_body)
    assert response.status_code == 200
    assert type(response_body) ==  list
    if len(response_body) > 0:
            keys = []
            for i in response_body:
                for key in i.keys():
                    if key not in keys:
                        keys.append(key)
                assert len(keys) == 3
                assert "id" in keys
                assert "name" in keys
                assert "url" in keys

def test_read_bookmark():
    response = client.get("/bookmarks/")
    response_body = response.json()
    if len(response_body) > 0:
        response = client.get("/bookmarks/1")
        response_body = response.json()
        print(response)
        keys = []
        for key in response_body.keys():
            if key not in keys:
                keys.append(key)
        assert "id" in keys
        assert "name" in keys
        assert "url" in keys
        

            