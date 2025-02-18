import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const HealthAndLifestyle = ({ nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: {
      water_intake: "",
      sleep_hours: "",
      dietary_preference: "",
      medical_conditions: "",
    },
    validationSchema: Yup.object({
      water_intake: Yup.number()
        .min(0, "Enter a valid amount")
        .required("Required"),
      sleep_hours: Yup.number()
        .min(0, "Enter a valid number of hours")
        .max(24, "Must be less than 24")
        .required("Required"),
      dietary_preference: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Health & Lifestyle Data:", values); 
      nextStep(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 300 }}>
      <Typography variant="h5">Health & Lifestyle</Typography>

      <TextField
        label="Water Intake (Liters/Day)"
        type="number"
        {...formik.getFieldProps("water_intake")}
        error={formik.touched.water_intake && Boolean(formik.errors.water_intake)}
        helperText={formik.touched.water_intake && formik.errors.water_intake}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        label="Sleep Hours (Per Night)"
        type="number"
        {...formik.getFieldProps("sleep_hours")}
        error={formik.touched.sleep_hours && Boolean(formik.errors.sleep_hours)}
        helperText={formik.touched.sleep_hours && formik.errors.sleep_hours}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        select
        label="Dietary Preference"
        {...formik.getFieldProps("dietary_preference")}
        error={formik.touched.dietary_preference && Boolean(formik.errors.dietary_preference)}
        helperText={formik.touched.dietary_preference && formik.errors.dietary_preference}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Vegetarian">Vegetarian</MenuItem>
        <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
        <MenuItem value="Vegan">Vegan</MenuItem>
      </TextField>

      <TextField
        label="Medical Conditions (Optional)"
        {...formik.getFieldProps("medical_conditions")}
        fullWidth
        sx={{ mt: 2 }}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="outlined" onClick={prevStep}>Back</Button>
        <Button type="submit" variant="contained">Next</Button>
      </Box>
    </Box>
  );
};

export default HealthAndLifestyle;
