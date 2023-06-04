import { FC } from "react";
import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { PublicHeader } from "../../components/PublicHeader";

const Privacy: FC = () => {
  return (
    <>
      <PublicHeader>
        <Link to="/auth/register">
          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontSize: {
                xs: "11px",
                md: "15px",
              },
              width: {
                xs: "87px",
                md: "107px",
              },
              minHeight: {
                xs: "32px",
                md: "55px",
              },
            }}
          >
            SIGNUP
          </Button>
        </Link>
      </PublicHeader>
      <img src="/logo.svg" alt="" />
      <Typography variant="h3" sx={{ mt: 5, width: "100%" }}>
        Terms of Use
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, maiores
        esse incidunt ab assumenda, possimus dolor error, consectetur dicta
        libero nihil accusamus impedit optio natus omnis! Aperiam libero error
        dolore, excepturi in veritatis necessitatibus omnis voluptate eligendi
        assumenda, ut velit labore illum! A soluta et facere distinctio nam
        assumenda excepturi.
      </Typography>
      <Typography variant="h3" sx={{ mt: 5, width: "100%" }}>
        Privacy Policy
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, maiores
        esse incidunt ab assumenda, possimus dolor error, consectetur dicta
        libero nihil accusamus impedit optio natus omnis! Aperiam libero error
        dolore, excepturi in veritatis necessitatibus omnis voluptate eligendi
        assumenda, ut velit labore illum! A soluta et facere distinctio nam
        assumenda excepturi.
      </Typography>
    </>
  );
};

export default Privacy;
