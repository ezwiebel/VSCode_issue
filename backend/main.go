package main

import (
	"fmt"
	"log"
	"net/http"
	"errors"
	"flag"

	"github.com/gorilla/mux"
	"github.com/libgit2/git2go"
)

var requirementsGit *git.Repository

func BuildRouter() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/levels", ListLevels)
	router.HandleFunc("/levels/{levelName}", ListElements).Methods("GET")
	return router
}

func main() {
	var port int
	flag.IntVar(&port, "port", 8080, "HTTP port")

	srv := http.Server{
		Addr:    fmt.Sprintf(":%d", port),
		Handler: BuildRouter(),
	}

	log.Printf("running at 'http://localhost:%d'", port)
	if srv.ListenAndServe() != nil {
		log.Fatal(errors.New("Server is not responding"))
	}
}
