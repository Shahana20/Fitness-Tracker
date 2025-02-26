import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import FitnessStatus from "./FitnessStatus";
import HealthAndLifestyle from "./HealthAndLifestyle";
import WorkoutAndNutrition from "./WorkoutAndNutrition";
import FitnessDashboard from "./FitnessDashboard";

const steps = ["Basic Info", "Current Fitness", "Health & Lifestyle", "Workout & Nutrition"];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    fitness_goal: "",
    height: "",
    weight: "",
    activity_level: "",
    step_count: "",
    water_intake: "",
    sleep_hours: "",
    dietary_preference: "",
    medical_conditions: "",
    workout_type: "",
    workout_frequency: "",
    need_diet_plan: "",
  });
  const navigate = useNavigate();
  
  const nextStep = (values) => {
    setFormData((prev) => ({ ...prev, ...values }));
    setActiveStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => setActiveStep((prevStep) => prevStep - 1);

  const submitForm = async (values) => {
    const finalData = {
      user: {
        personal_info_attributes: {
          name: formData.name,
          age: formData.age,
          gender: formData.gender,
          fitness_goal: formData.fitness_goal
        },
        fitness_status_attributes: {
          height: formData.height,
          weight: formData.weight,
          activity_level: formData.activity_level,
          step_count: formData.step_count
        },
        health_info_attributes: {
          water_intake: formData.water_intake,
          sleep_hours: formData.sleep_hours,
          dietary_preference: formData.dietary_preference,
          medical_conditions: formData.medical_conditions
        },
        workout_plan_attributes: {
          workout_type: formData.workout_type,
          workout_frequency: formData.workout_frequency,
          need_diet_plan: formData.need_diet_plan
        },
      }

    }
    console.log("Final form data", finalData);
    try {
      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData)
      })
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors.join(", "));
      }
  
      const result = await response.json();
      console.log("User created successfully:", result);
  
      navigate("/dashboard", { state: { formData: result } })
    }
    catch(error) {
      console.error("Error processing request ", error.message);
    }
    
  };

  return (
    <Box sx={{ width: "60%", mx: "auto", mt: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 5, textAlign: "center" }}>
        {activeStep === 0 && <PersonalInfo nextStep={nextStep} />}
        {activeStep === 1 && <FitnessStatus nextStep={nextStep} prevStep={prevStep} />}
        {activeStep === 2 && <HealthAndLifestyle nextStep={nextStep} prevStep={prevStep} />}
        {activeStep === 3 && <WorkoutAndNutrition prevStep={prevStep} submitForm={submitForm} />}
        {activeStep === 4 && <FitnessDashboard formData={formData} />}
      </Box>

      
    </Box>
  );
};

export default StepperComponent;
