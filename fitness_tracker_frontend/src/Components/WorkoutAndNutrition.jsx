import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const WorkoutAndNutrition = ({ prevStep, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      workout_type: "",
      workout_frequency: "",
      need_diet_plan: "",
    },
    validationSchema: Yup.object({
      workout_type: Yup.string().required("Required"),
      workout_frequency: Yup.number()
        .min(1, "Must be at least once per week")
        .max(7, "Cannot be more than 7 days")
        .required("Required"),
      need_diet_plan: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Workout & Nutrition Data:", values); 
      submitForm(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 300 }}>
      <Typography variant="h5">Workout & Nutrition</Typography>

      <TextField
        select
        label="Preferred Workout Type"
        {...formik.getFieldProps("workout_type")}
        error={formik.touched.workout_type && Boolean(formik.errors.workout_type)}
        helperText={formik.touched.workout_type && formik.errors.workout_type}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Gym">Gym</MenuItem>
        <MenuItem value="Yoga">Yoga</MenuItem>
        <MenuItem value="Home Workouts">Home Workouts</MenuItem>
        <MenuItem value="Running">Running</MenuItem>
      </TextField>

      <TextField
        label="Workout Frequency (Days/Week)"
        type="number"
        {...formik.getFieldProps("workout_frequency")}
        error={formik.touched.workout_frequency && Boolean(formik.errors.workout_frequency)}
        helperText={formik.touched.workout_frequency && formik.errors.workout_frequency}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        select
        label="Do you need a diet plan?"
        {...formik.getFieldProps("need_diet_plan")}
        error={formik.touched.need_diet_plan && Boolean(formik.errors.need_diet_plan)}
        helperText={formik.touched.need_diet_plan && formik.errors.need_diet_plan}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </TextField>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="outlined" onClick={prevStep}>Back</Button>
        <Button type="submit" variant="contained">Finish</Button>
      </Box>
    </Box>
  );
};

export default WorkoutAndNutrition;
