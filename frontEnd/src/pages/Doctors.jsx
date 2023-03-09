import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../assets/images/logo.png";
import ibrahim from "../assets/images/ibrahim.png";
import ahmad from "../assets/images/ahmad.png";

const Wrapper = styled(Box)({
    minHeight: "calc(100vh - 120px)",
});

const ContentWrapper = styled(Box)({
    padding: "50px",
});

const DoctorCard = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
    "& img": {
        maxWidth: "100%",
        borderRadius: "50%",
    },
    "& h5": {
        marginTop: "20px",
    },
    "& p": {
        marginTop: "10px",
    },
});

const Doctors = () => {
    return (
        <>
            <Wrapper>
                <ContentWrapper>
                    <Typography variant="h3" sx={{ textAlign: "center", mb: "50px" }}>
                        Our Doctors
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <DoctorCard>
                            <img src={ibrahim} alt="Ibrahim" />
                            <Typography variant="h5" sx={{ mt: "20px" }}>
                                Dr. Ibrahim
                            </Typography>
                            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                                Specializes in Cardiology
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: "10px" }}>
                                Dr. Ibrahim is an experienced cardiologist with over 10 years of
                                experience. He is passionate about providing personalized care to
                                his patients and believes in treating the whole person, not just
                                their condition.
                            </Typography>
                        </DoctorCard>
                        <DoctorCard>
                            <img src={ahmad} alt="Ahmad" />
                            <Typography variant="h5" sx={{ mt: "20px" }}>
                                Dr. Ahmad
                            </Typography>
                            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                                Specializes in Pediatrics
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: "10px" }}>
                                Dr. Ahmad is a board-certified pediatrician with over 15 years of
                                experience. He is committed to providing comprehensive care to
                                his patients, from infancy through adolescence.
                            </Typography>
                        </DoctorCard>
                    </Box>
                </ContentWrapper>
            </Wrapper>
        </>
    );
};

export default Doctors;
