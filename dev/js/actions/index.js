export const selectCar =(car)=>{
    console.log("you click" , car.model);

    return {
        type:"CAR_SELECT",
        payload:car
    }

};