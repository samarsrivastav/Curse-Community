package router

import (
	"github.com/gorilla/mux"
	"github.com/samarsrivastav/curse-community/backend/controller"
)

func Router() *mux.Router{
	router := mux.NewRouter()
	router.HandleFunc("/api/jobs", controller.GetJobs).Methods("GET")
	router.HandleFunc("/api/job/{id}", controller.GetOneJob).Methods("GET")
	router.HandleFunc("/api/blogs", controller.GetBlogs).Methods("GET")
	router.HandleFunc("/api/blog/{id}", controller.GetOneBlog).Methods("GET")
	return router
}