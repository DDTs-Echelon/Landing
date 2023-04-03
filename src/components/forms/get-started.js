import React from "react";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./get-started.css";
import { Box, Button, styled, TextField } from "@mui/material";

const StyledField = styled(TextField)({
  borderRadius: "32px",
  background: "white",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "32px",
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const SubmitButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  fontFamily: "PP Mori",
  lineHeight: 1,
  whiteSpace: "nowrap",
  padding: "20px 32px 20px 32px",
  justifyContent: "center",
  backgroundColor: "#FF661F",
  borderRadius: "32px",
  transition: "0.3s",
  textTransform: "none",
  "&.MuiButton-text": {
    color: "white",
    "&:hover": {
      color: "#FF661F",
    },
  },
  "&:hover": {
    backgroundColor: "white",
    transition: "0.3s",
  },
});

const GetStarted = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Not a valid mobile number"
      )
      .min(10, "too short")
      .max(10, "too long"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const helperTextName = errors.name?.message;
  const helperTextPhone = errors.phone?.message;

  const handleRequest = async (e) => {
    const name = e.name;
    const mobile = e.phone;
    try {
      await fetch(
        "https://v1.nocodeapi.com/anuraagddt/google_sheets/JhcVzSePHXmqGAzs?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[name, mobile]]),
        }
      );
      window.alert("Thank you for your response! We will contact you soon.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => handleRequest(data))}
    >
      <Box
        sx={{
          //display: { sm: "flex", xs: "block" },
          display: "block",
          marginBottom: errors.phone ? "22px" : "40px",
        }}
      >
        <Box
          sx={{
            display: "block",
            width: { xs: "100%", sm: "70%" },
            marginRight: { sm: "10px" },
            marginBottom: { xs: "10px", sm: "0px" },
          }}
        >
          <StyledField
            sx={{
              width: "100%",
            }}
            error={!!errors.name}
            placeholder="Your name..."
            {...register("name")}
          />
          {errors.phone ? (
            <p
              style={{
                color: "red",
                marginLeft: "50px",
                marginTop: "7px",
                marginBottom: "7px",
              }}
            >
              {helperTextName}
            </p>
          ) : (
            <p
              style={{ color: "red", marginLeft: "50px", marginTop: "7px" }}
            ></p>
          )}
          <StyledField
            // InputProps={{
            //   startAdornment: (
            //     <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
            //       <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
            //     </svg>
            //   ),
            // }}
            sx={{
              width: "100%",
            }}
            error={!!errors.phone}
            placeholder="Your phone number..."
            {...register("phone")}
          />
          {errors.phone ? (
            <p
              style={{
                color: "red",
                marginLeft: "50px",
                marginTop: "7px",
                marginBottom: "7px",
              }}
            >
              {helperTextPhone}
            </p>
          ) : (
            <p
              style={{ color: "red", marginLeft: "50px", marginTop: "7px" }}
            ></p>
          )}
        </Box>
        <SubmitButton
          sx={{
            color: "white",
            marginBottom: errors.phone ? "21px" : "7px",
            width: { xs: "100%", sm: "30%" },
          }}
          type="submit"
          onClick={handleSubmit}
          disabled={!isDirty}
        >
          Get started
        </SubmitButton>
      </Box>
    </form>
  );
};

export default GetStarted;
