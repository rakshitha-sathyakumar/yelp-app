import React, { Component } from 'react';
import Navigationbar from '../../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import backgroundImage from '../images/menuCard.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';

class dishList extends Component {
    constructor(props) {
        super(props);
        this.state ={};
    }
    render () {
        return (
            <div >
                <nav class="navbar" style={{backgroundColor: "red"}}>
                        <h1 style={{marginLeft:"600px", color:"white"}}> Full Menu</h1>
                </nav>
                <br/>
                <div class="container" style={{border:"1px solid black", borderTop:"none"}}>
                <div class="container" id="appretizer">
                    <h2> Appetizer</h2>
                    <hr />
                <div>
                <h4 style={{float:"left"}}> Osetra Caviar</h4>
                <p style={{float:"right"}}> $20 </p>
                </div><br/><br/>
                <p>buckwheat blini, crème fraiche, sweet onion, capers, GV farm</p><br />
                <div>
                <h4 style={{float:"left"}}> Smoked Salmon</h4>
                <p style={{float:"right"}}> $19 </p>
                </div><br/><br/>
                <p>GV Farms chioggia beets, cucumber, capers, red onion, red pepper vinaigrett</p><br />
                </div>
                <hr />
                <div class="container" id="salad">
                    <h2> Salads</h2>
                    <hr />
                <div>
                <h4 style={{float:"left"}}> Salade Francaise</h4>
                <p style={{float:"right"}}> $14 </p>
                </div><br/><br/>
                <p>butter lettuce, marinated cucumber, shaved radish, mustard tarragon vinaigrette</p><br />
                <div>
                <h4 style={{float:"left"}}> Romaine Salad</h4>
                <p style={{float:"right"}}> $15 </p>
                </div><br/><br/>
                <p>hearts of romaine,house made caesar dressing, parmesan cheese, crouton</p><br />
                </div>
                <hr />
                <div class="container" id="mainCourse">
                    <h2> Main Course</h2>
                    <hr />
                <div>
                <h4 style={{float:"left"}}> Bamboo Steamed Sea Bass</h4>
                <p style={{float:"right"}}> $32 </p>
                </div><br/><br/>
                <p>cooked in banana leaf, ghee, vegetables</p><br />
                <div>
                <h4 style={{float:"left"}}> Pan Fried Salmon</h4>
                <p style={{float:"right"}}> $25 </p>
                </div><br/><br/>
                <p>curry leaves, cumin, basmati rice, watermelon radish, fire roasted lemon, rasam</p><br />
                </div>
                <hr />
                <div class="container" id="desserts">
                    <h2> Dessserts</h2>
                    <hr />
                <div>
                <h4 style={{float:"left"}}> House Avocado Ice Cream</h4>
                <p style={{float:"right"}}> $7 </p>
                </div><br/><br/>
                <p>avocado, milk</p><br/>
                <div>
                <h4 style={{float:"left"}}> Mango Creme Brulee</h4>
                <p style={{float:"right"}}> $8 </p>
                </div><br/><br/>
                <p>mango, parle-g crust</p><br />
                </div>
                <hr />
                <div class="container" id="beverages">
                    <h2> Beverages</h2>
                    <hr />
                <div>
                <h4 style={{float:"left"}}> Cha Yen Thai</h4>
                <p style={{float:"right"}}> $5 </p>
                </div><br/><br/>
                <p>Thai tea with lychee jelly topped with sea salt.</p><br />
                <div>
                <h4 style={{float:"left"}}> Matcha Latte</h4>
                <p style={{float:"right"}}> $4 </p>
                </div><br/><br/>
                <p>Matcha green tea with non-dairy milk and hydrated cane, topped with crystal boba.</p><br />
                </div>
            </div>
        </div>
        )}
    }

export default dishList;