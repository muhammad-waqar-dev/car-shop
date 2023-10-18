import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Container } from "react-bootstrap";
import Selectbox from "../../shared/SelectBox/Selectbox";
import { carTypes } from "../../utility/modals/carTypes";
import Paths from "../../utility/Paths";

const SearchCarTypes = () => {
  const navigate = useNavigate();

  const [selectedCarType, setSelectedCarType] = useState(-1); //Default selected is list of car types

  const handleChange = (value) => {
    setSelectedCarType(value);
  };
  
  const onClickViewResults = () => {
    if (selectedCarType == -1) {
      return navigate(Paths.carType.List, selectedCarType);
    } else {
      return navigate(Paths.carType.View);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Selectbox
            placeholder="Please select car type"
            className="custom-selectbox"
            classNamePrefix="custom-select"
            options={carTypes}
            // value={categoryOptions.filter(({ value }) => value === categoryId)}
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col md={4}>
          <Button
            onClick={() => onClickViewResults()}
            style={{
              maxWidth: "100%",
              height: "20%",
            }}
          >
            View results
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchCarTypes;
