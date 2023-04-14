import {Link} from 'react-router-dom';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/actions/ProductActions";


const Product = (props) => {
	let {_id, title,img,price,inStock} = props.product;
	const dispatch = useDispatch();

	  const deletehandler = (id) => {
	    if (window.confirm("Are you sure want to delete product?")) {
	      dispatch(deleteProduct(id));
	    }
	  };
	return(
		<>
		    <tr>
              <td>{title}</td>
              <td><img src={img} /></td>
              <td>{price}</td>
              <td>{inStock?'Yes':'Empty'}</td>
              <td><Link
	                to={`/product/edit/${_id}`}	                
	              >
	              	<i className="fa fa-edit"></i>
	              </Link>
	              <Link
	                to="#"
	                onClick={() => deletehandler(_id)}	                
	              >
	              	<i className="fa fa-trash"></i>
	              </Link>
	           </td>
            </tr>
		</>
		)
}

export default Product;