package main

type Element struct {
	UUID  string `json:"uuid"`
	ID    string `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

type APIError struct {
	Msg string `json:"error"`
}
