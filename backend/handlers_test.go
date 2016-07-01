package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestListLevels(t *testing.T) {
	server := httptest.NewServer(BuildRouter())

	request, err := http.NewRequest("GET", server.URL+"/levels", nil)
	if err != nil {
		t.Error(err)
	}
	res, err := http.DefaultClient.Do(request)
	if err != nil {
		t.Error(err)
	}
	defer res.Body.Close()
	contents, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Error(err)
	}
	const expectedJSON = "[\"level1\",\"level2\"]"
	if expectedJSON != string(contents) {
		t.Error("Expected json response to be '"+expectedJSON+"', got ", string(contents))
	}
}

func TestListElements(t *testing.T) {
	server := httptest.NewServer(BuildRouter())

	request, err := http.NewRequest("GET", server.URL+"/levels/swr", nil)
	if err != nil {
		t.Error(err)
	}
	res, err := http.DefaultClient.Do(request)
	if err != nil {
		t.Error(err)
	}
	defer res.Body.Close()
	contents, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Error(err)
	}
	elements := []Element{}
	json.Unmarshal(contents, &elements)
	if len(elements) != 2 {
		t.Error("Expected elements to contain 2 elements, got ", len(elements))
	}

	expectedEl := Element{
		UUID:  "011fb159-276d-429f-99ab-e595c42fdb70",
		ID:    "EL-0602",
		Title: "Title EL-602",
		Body:  "**This** is the *body* of EL-0602",
	}
	AssertElement(t, expectedEl, elements[0])
}
