package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/samarsrivastav/curse-community/backend/router"
)

func main(){
	fmt.Println("--Backend Api--")
	r:=router.Router()
	log.Fatal(http.ListenAndServe(":4000",r))
}