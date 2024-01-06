import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
 function Cards(props) {
    return (
      <Card className="w-60">
        <CardHeader shadow={false} floated={false} className="h-60 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="card-image"
            className="h-40 w-40 object-cover rounded-full shadow-md "
          />
        </CardHeader>
        <CardBody>
            <Typography color="blue-gray" className="font-medium mb-2 flex items-center justify-center">
             <span>{props.title}</span> 
            </Typography>
        
        </CardBody>
      </Card>
    );
  }
  export default Cards