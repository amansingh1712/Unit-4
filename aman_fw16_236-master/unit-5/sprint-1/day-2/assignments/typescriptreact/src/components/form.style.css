import { useEffect, useState } from "react";
import styled from "styled-components";
import axios, { AxiosResponse } from "axios";
import "./form.style.css";

const FlexDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  width: 600px;
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: fit-content;
  padding: 20px;
  background-color: whitesmoke;
  margin-bottom: 70px;
`;

const Label = styled.div`
  width: 170px;
`;

const TableContainer = styled.div`
  width: fit-content;
  margin: auto;
`;

const sortFilterDiv = {
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  width: "fit-content",
  margin: "auto",
  padding: "20px",
  border: "1px solid lightgray",
  backgroundColor: "whitesmoke",
  borderRadius: "5px",
  marginBottom: "25px"
};

type ProductInfo = {
  id: string;
  model: string;
  year: number;
  os: string;
  height: number;
  width: number;
  price: number;
};

export const Form = () => {
  const [data, setData] = useState<ProductInfo>({
    id: "",
    model: "",
    year: 0,
    os: "",
    height: 0,
    width: 0,
    price: 0
  });
  const [dataArr, setDataArr] = useState<ProductInfo[]>([]);

  const getData = () => {
    axios
      .get("http://localhost:8080/laptops")
      .then((response: AxiosResponse<ProductInfo[]>) => {
        const { data } = response;
        setDataArr([...data]);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios.post("http://localhost:8080/laptops", data).then(() => {
      getData();
    });
  };

  function handleSort(dataArr: ProductInfo[], by: keyof ProductInfo) {
    let N = dataArr.length;
    for (let i = 0; i < N - 1; i++) {
      for (let j = 0; j < N - i - 1; j++) {
        if (dataArr[j][by] > dataArr[j + 1][by]) {
          let temp = dataArr[j];
          dataArr[j] = dataArr[j + 1];
          dataArr[j + 1] = temp;
        }
      }
    }
    setDataArr([...dataArr]);
  }

  function handleFilter(os: string) {
    axios
      .get("http://localhost:8080/laptops")
      .then((response: AxiosResponse<ProductInfo[]>) => {
        let { data } = response;
        if (os !== "all") {
          data = data.filter((el) => el.os === os);
          setDataArr([...data]);
        } else {
          setDataArr([...data]);
        }
      });
  }

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FlexDiv>
            <Label>Model:</Label>
            <div>
              <input
                name="model"
                type="text"
                onChange={(e) => {
                  setData({ ...data, model: e.target.value });
                }}
              />
            </div>
          </FlexDiv>

          <FlexDiv>
            <Label>Year of manufacturing:</Label>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, year: Number(e.target.value) });
                }}
              />
            </div>
          </FlexDiv>

          <FlexDiv>
            <Label>Operating System:</Label>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, os: e.target.value });
                }}
              />
            </div>
          </FlexDiv>

          <FlexDiv>
            <Label>Screen height:</Label>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, height: Number(e.target.value) });
                }}
              />
            </div>
          </FlexDiv>

          <FlexDiv>
            <Label>Screen width:</Label>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, width: Number(e.target.value) });
                }}
              />
            </div>
          </FlexDiv>

          <FlexDiv>
            <Label>Price:</Label>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, price: Number(e.target.value) });
                }}
              />
            </div>
          </FlexDiv>
          <FlexDiv>
            <div>
              <button type="submit">Submit</button>
            </div>
          </FlexDiv>
        </form>
      </FormContainer>

      <TableContainer>
        <div style={sortFilterDiv}>
          <div>
            <h4>Sort methods</h4>
            <button onClick={() => handleSort(dataArr, "year")}>
              Sort low-to-high Year
            </button>
            <br />
            <button onClick={() => handleSort(dataArr, "price")}>
              Sort low-to-high Price
            </button>
            <br />
            <button onClick={() => handleSort(dataArr, "width")}>
              Sort low-to-high Width
            </button>
          </div>
          <div>
            <h4>Filter methods</h4>
            <button onClick={() => handleFilter("windows")}>
              Only Windows
            </button>
            <br />
            <button onClick={() => handleFilter("mac")}>Only Mac</button>
            <br />
            <button onClick={() => handleFilter("linux")}>Only Linux</button>
            <br />
            <button onClick={() => handleFilter("all")}>All OS</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td>S.No</td>
              <td>Model</td>
              <td>Year</td>
              <td>OS</td>
              <td>Height</td>
              <td>Width</td>
              <td>Price(Rs)</td>
            </tr>
          </thead>
          <tbody>
            {dataArr.map(
              ({ id, model, year, os, height, width, price }, idx) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{model}</td>
                    <td>{year}</td>
                    <td>{os}</td>
                    <td>{height}</td>
                    <td>{width}</td>
                    <td>{price}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};