import { useDispatch, useSelector } from "react-redux";
import { addProuduct } from "../../../redux/action";
import Products from "../Products/Products";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.addProduct);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const form = event.target;
    const productName = form.productName.value;
    const productCategory = form.productCategory.value;
    const imgUrl = form.imgUrl.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const addProductItem = { productName, productCategory, imgUrl, price, quantity };
    console.log(addProductItem);
    dispatch(addProuduct(addProductItem));
  };

  return (
    <div className="py-16">
      <div className="productWrapper">
        {/* <!-- products container --> */}
        <div className="productContainer" id="lws-productContainer">
          {products.length === 0
            ? "Product Not Fount"
            : products.map((product) => <Products key={product.id} product={product}></Products>)}
        </div>

        {/* <!-- products container ends --> */}
        <div>
          {/* <!-- Product Input Form --> */}
          <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-[#534F4F]"
              id="lws-addProductForm"
            >
              {/* <!-- product name --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputName">Product Name</label>
                <input
                  className="addProductInput"
                  id="lws-inputName"
                  type="text"
                  name="productName"
                  required
                />
              </div>
              {/* <!-- product category --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputCategory">Category</label>
                <input
                  className="addProductInput"
                  id="lws-inputCategory"
                  type="text"
                  name="productCategory"
                  required
                />
              </div>
              {/* <!-- product image url --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputImage">Image Url</label>
                <input
                  className="addProductInput"
                  id="lws-inputImage"
                  type="text"
                  name="imgUrl"
                  required
                />
              </div>
              {/* <!-- price & quantity container --> */}
              <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                  <label htmlFor="ws-inputPrice">Price</label>
                  <input
                    className="addProductInput"
                    type="number"
                    id="lws-inputPrice"
                    name="price"
                    required
                  />
                </div>
                {/* <!-- quantity --> */}
                <div className="space-y-2">
                  <label htmlFor="lws-inputQuantity">Quantity</label>
                  <input
                    className="addProductInput"
                    type="number"
                    id="lws-inputQuantity"
                    name="quantity"
                    required
                  />
                </div>
              </div>
              {/* <!-- submit button --> */}
              <button type="submit" id="lws-inputSubmit" className="submit">
                Add Product
              </button>
            </form>
          </div>
          {/* <!-- Product Input Form Ends --> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
