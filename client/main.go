package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/rs/cors"
	"github.com/samarsrivastav/curse-community/backend/router"
)

func main(){
	fmt.Println("--Backend Api--")
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // Allow all origins, change this to restrict
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
	})

	// Use the CORS handler to wrap the router
	r:=router.Router()
	handler := c.Handler(r)
	log.Fatal(http.ListenAndServe(":4000", handler))
}