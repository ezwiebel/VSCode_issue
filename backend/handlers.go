package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func ListLevels(w http.ResponseWriter, req *http.Request) {
	levels, err := GetAllLevels()
	if err != nil {
		log.Println("Failed to retrieve levels.")
		levels = []string{}
	}

	writeJSON(levels, w, http.StatusOK)
}

func ListElements(w http.ResponseWriter, req *http.Request) {
	elements, err := GetAllElements()
	if err != nil {
		log.Println("Failed to read elements")
		elements = []Element{}
	}

	writeJSON(elements, w, http.StatusOK)
}

// writeJSON marshals data into JSON then outputs it on the response writer
// with appropriate status code.
func writeJSON(data interface{}, rw http.ResponseWriter, statusCode int) {
	payload, err := json.Marshal(data)
	if err != nil {
		log.Println("Failed to json.Marshal", data, err)
		rw.WriteHeader(http.StatusInternalServerError)
		return
	}

	rw.Header().Set("Content-Type", "application/json; encoding=\"utf-8\"")
	rw.WriteHeader(statusCode)
	rw.Write(payload)
}
