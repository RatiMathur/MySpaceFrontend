import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customPOST } from "../utilities";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [quantityError, setQuantityError] = useState();
  const [price, setPrice] = useState(1);
  const [priceError, setPriceError] = useState();

  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    setNameandError(name);
    setDescriptionandError(description);
    setPriceandError(price);
    setQuantityandError(quantity);

    const request = {
      name,
      description,
      quantity,
      price,
    };

    customPOST("products", request).then((response) =>
      navigate("/dashboard/products")
    );
  }

  function setNameandError(value) {
    setName(value);
    if (value === "") {
      setNameError("Please enter product name.");
    } else setNameError("");
  }

  function setDescriptionandError(value) {
    setDescription(value);
    if (value === "") {
      setDescriptionError("Please enter the description");
    } else setDescriptionError("");
  }

  function setPriceandError(value) {
    setPrice(value);
    if (value === "") {
      setPriceError("Please enter price");
    } else setPriceError("");
  }

  function setQuantityandError(value) {
    setQuantity(value);
    if (value === "") {
      setQuantityError("Please enter the quantity");
    } else if (value >= 10000) {
      setQuantityError("Please enter the quantity less than 10000");
    } else setQuantityError("");
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <h5 className="card-header">Add</h5>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group mt-2">
              <label htmlFor="productName" className="mb-2">
                Product Name
              </label>
              <input
                type="text"
                className={`form-control ${nameError && `is-invalid`}`}
                id="productName"
                placeholder="Product Name"
                maxLength={40}
                value={name}
                onChange={(event) => setNameandError(event.target.value)}
                onBlur={(event) => setNameandError(event.target.value)}
              />
              {nameError && <span className="text-danger">{nameError}</span>}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="productDescription" className="mb-2">
                Product Description
              </label>
              <textarea
                type="text"
                className={`form-control ${descriptionError && `is-invalid`}`}
                id="productDescription"
                placeholder="Product Description"
                value={description}
                onChange={(event) => setDescriptionandError(event.target.value)}
                onBlur={(event) => setDescriptionandError(event.target.value)}
              />
              {descriptionError && (
                <span className="text-danger">{descriptionError}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <div className="row">
                <div className="col">
                  <label htmlFor="productQuantity" className="mb-2">
                    Product Quantity
                  </label>
                  <input
                    type="number"
                    className={`form-control ${quantityError && `is-invalid`}`}
                    placeholder="Quantity"
                    id="productQuantity"
                    value={quantity}
                    onChange={(event) =>
                      setQuantityandError(event.target.value)
                    }
                    onBlur={(event) => setQuantityandError(event.target.value)}
                  />
                  {quantityError && (
                    <span className="text-danger">{quantityError}</span>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="productPrice" className="mb-2">
                    Product Price
                  </label>
                  <input
                    type="number"
                    className={`form-control ${priceError && `is-invalid`}`}
                    placeholder="price"
                    id="productPrice"
                    value={price}
                    onChange={(event) => setPriceandError(event.target.value)}
                    onBlur={(event) => setPriceandError(event.target.value)}
                  />
                  {priceError && (
                    <span className="text-danger">{priceError}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group mt-5">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
