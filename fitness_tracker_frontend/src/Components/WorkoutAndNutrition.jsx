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
    <form
      onSubmit={formik.handleSubmit}
      style={{
        width: "300px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Workout & Nutrition</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Preferred Workout Type</label>
        <select
          {...formik.getFieldProps("workout_type")}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select</option>
          <option value="Gym">Gym</option>
          <option value="Yoga">Yoga</option>
          <option value="Home Workouts">Home Workouts</option>
          <option value="Running">Running</option>
        </select>
        {formik.touched.workout_type && formik.errors.workout_type && (
          <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.workout_type}</p>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Workout Frequency (Days/Week)</label>
        <input
          type="number"
          {...formik.getFieldProps("workout_frequency")}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        {formik.touched.workout_frequency && formik.errors.workout_frequency && (
          <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.workout_frequency}</p>
        )}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Do you need a diet plan?</label>
        <select
          {...formik.getFieldProps("need_diet_plan")}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {formik.touched.need_diet_plan && formik.errors.need_diet_plan && (
          <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.need_diet_plan}</p>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          type="button"
          onClick={prevStep}
          style={{
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#ccc",
            cursor: "pointer",
          }}
        >
          Back
        </button>
        <button
          type="submit"
          style={{
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
          }}
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default WorkoutAndNutrition;
