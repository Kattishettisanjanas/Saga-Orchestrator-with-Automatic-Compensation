package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func reserve(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Inventory reserved")
	json.NewEncoder(w).Encode(map[string]string{"status": "reserved"})
}

func release(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Inventory released")
	json.NewEncoder(w).Encode(map[string]string{"status": "released"})
}

func main() {
	http.HandleFunc("/reserve", reserve)
	http.HandleFunc("/release", release)
	http.ListenAndServe(":4000", nil)
}
