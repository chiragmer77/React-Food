import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";


// const Cart = (props) => {
//     let totalPrice = 0;
//     const clickHandle = (e) => {
//         let items = props.items.slice();
//         items.map((item) => {
//             if(item.id === e.id) {
//                 item.selected = !item.selected;
//             }
//             return item;
//         });
//         props.updateItems(items);
//     }
//     return (
//         <div className="home">
//            <Table striped  bordered condensed hover>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <tr>
//                         Name
//                     </tr>
//                     <tr>
//                         Price
//                     </tr>
//                     <tr>
//                         Remove to card
//                     </tr>
//                 </tr>
//             </thead>

//             <tbody>
//                 {
//                     props.items.map((item, i) => {
//                         if(item.selected) {
//                             totalPrice += item.price;
//                             return(
//                                 <tr key={item.id}>
//                                    <td>
//                                     {i+1}
//                                    </td>
//                                    <td>
//                                     {item.name}
//                                    </td>
//                                    <td>
//                                     {item.price}
//                                    </td>
//                                    <td>
//                                     <Button bsStyle={item.selected ? "success" : "primary"} onClick={()=>clickHandle(item)}>{item.selected ? "Remove" : "Add"}</Button>
//                                    </td>
//                                 </tr>
//                             )
//                         }
//                     })
//                 }
//                 <tr>
//                     <th></th>
//                     <th>
//                         Total
//                     </th>
//                     <th colspan="2"> 
//                       {totalPrice}
//                     </th>
//                 </tr>
//             </tbody>

//            </Table>
//         </div>
//     )
// };

// const mapStateToProps = state => ({
//     items: state.dummy.items
// })

// export default connect(
//     mapStateToProps, {updateItems}
// )(Cart)