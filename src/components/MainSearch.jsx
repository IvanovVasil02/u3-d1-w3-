import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getJobsData } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getJobsData(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3 d-flex justify-content-center align-items-center '>
          <h1 className='display-1'>Remote Jobs Search</h1>
          <Link to='favoriteList' className='nav-link'>
            <h5 className='ms-auto text-primary'>Go to favorites</h5>
          </Link>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='type and press Enter'
            />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
