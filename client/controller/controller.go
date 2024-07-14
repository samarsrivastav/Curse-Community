package controller

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const dbString = "mongodb+srv://samarsrivastav69:S1a2m3a4r5_123@bitbyte.xxplsvs.mongodb.net/?retryWrites=true&w=majority"
const dbName = "BitByte_Community"
const colName1 = "joblist"
const colName2 = "bloglist"

var jobCol *mongo.Collection
var blogCol *mongo.Collection

func init() {
	clientOption := options.Client().ApplyURI(dbString)
	client, err := mongo.Connect(context.TODO(), clientOption)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("connection established")
	jobCol = client.Database(dbName).Collection(colName1)
	blogCol = client.Database(dbName).Collection(colName2)
}

// MongoDB helpers
func getJobs() []primitive.M {
	cur, err := jobCol.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}
	var jobs []primitive.M
	for cur.Next(context.Background()) {
		var job bson.M
		err := cur.Decode(&job)
		if err != nil {
			log.Fatal(err)
		}
		jobs = append(jobs, job)
	}
	defer cur.Close(context.Background())
	return jobs
}

func getOnejob(jobid string) primitive.M {
	id, _ := primitive.ObjectIDFromHex(jobid)
	filter := bson.M{"_id": id}
	var job primitive.M

	err := jobCol.FindOne(context.Background(), filter).Decode(&job)
	if err != nil {
		log.Fatal(err)
	}
	return job
}

func getOneblog(blogid string) primitive.M {
	id, _ := primitive.ObjectIDFromHex(blogid)
	filter := bson.M{"_id": id}
	var blog primitive.M

	err := blogCol.FindOne(context.Background(), filter).Decode(&blog)
	if err != nil {
		log.Fatal(err)
	}
	return blog
}

func getblogs() []primitive.M {
	cur, err := blogCol.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}
	var blogs []primitive.M
	for cur.Next(context.Background()) {
		var blog bson.M
		err := cur.Decode(&blog)
		if err != nil {
			log.Fatal(err)
		}
		blogs = append(blogs, blog)
	}
	defer cur.Close(context.Background())
	return blogs
}

// Actual controllers
func GetJobs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	alljobs := getJobs()
	json.NewEncoder(w).Encode(alljobs)
}

func GetBlogs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	allblogs := getblogs()
	json.NewEncoder(w).Encode(allblogs)
}

func GetOneBlog(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	blog := getOneblog(params["id"])
	json.NewEncoder(w).Encode(blog)
}

func GetOneJob(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	jobs := getOnejob(params["id"])
	json.NewEncoder(w).Encode(jobs)
}
