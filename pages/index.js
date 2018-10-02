import Layout from '../components/MyLayout.js';
import {connect} from 'react-redux'

import '../sass/main.scss';

const Index = (props) => (
    <Layout title={'Home'}>
        <div className="container">
            <div className="row">
                <div className="home col-6">
                    <div className="home__section-left">
                        <h1>faikar</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat eum blanditiis nesciunt expedita maxime! Quibusdam voluptates aperiam quos laudantium illo suscipit dolores minima dolorum molestiae. Quibusdam, velit eius. Aspernatur nulla veniam excepturi magnam rem vel non, culpa explicabo id, harum labore deserunt eligendi eius architecto dolores enim similique praesentium! Consequatur aspernatur nisi soluta laborum nostrum officiis illo rem, commodi cupiditate, perspiciatis sunt libero ipsa quasi sapiente quae facere blanditiis ut iure suscipit deleniti quod? Fugit, id? Sequi, maiores ipsa. Voluptate optio maxime et neque, nesciunt commodi autem magnam ipsum tenetur consectetur iste eius nisi excepturi facere ullam, nam animi doloremque illo quo. Neque, quam, ut doloremque tempora placeat aliquid nulla illum atque sequi itaque modi magnam reiciendis quidem magni vero est dolorum repudiandae vitae doloribus, totam expedita quae id delectus. Ratione impedit placeat provident, distinctio exercitationem dolorem alias rem esse consectetur, doloribus unde aut. Rem, officia. Eligendi, culpa. Sint ipsam accusantium voluptatibus quis cum magnam rem eaque veritatis aut quia commodi voluptas, tempore distinctio exercitationem ab aperiam porro omnis vel repellat? Cum nam repellendus dignissimos consequatur sed excepturi, quo consequuntur quam nemo quasi porro dicta dolorum ex aspernatur nostrum corrupti inventore doloribus nisi deserunt asperiores! Officia sed, ex explicabo quod dolores earum rerum. Architecto fugiat tenetur nesciunt nulla id vel beatae autem, ratione iure, ea sed eligendi nostrum ut ipsa praesentium accusamus aut laboriosam. Necessitatibus dolores dolor magnam dolorum saepe. Consectetur dignissimos porro sit odit cupiditate doloremque ut. Ut a voluptates reprehenderit facilis esse reiciendis omnis debitis vitae dolor error pariatur, ea accusantium dignissimos itaque unde asperiores impedit sint fugiat quos ratione, consequuntur nisi? Commodi veniam corporis voluptate atque quibusdam sed odit, molestiae id soluta ea, exercitationem suscipit fuga qui velit ratione. Commodi voluptatibus consequatur quo. Inventore, magnam. Tenetur impedit voluptates totam nisi, quasi, accusamus velit quis sit vel maxime tempora officiis nam inventore nihil obcaecati eum accusantium dolores modi sed amet ut natus architecto praesentium. Deserunt quos delectus velit officiis aliquid hic fugiat cupiditate accusantium eum iste dignissimos dolores impedit reiciendis ad quod, nisi itaque sit recusandae animi non modi eveniet explicabo facere! Ex quibusdam reiciendis eaque illo iusto ipsam praesentium labore, minus repellendus. Nesciunt quam corporis dolorum eos voluptas praesentium iste omnis dolor sit mollitia quia magni numquam saepe veritatis rem culpa molestias amet vitae fugiat, tempore odit? Tenetur, odio. Error veritatis, tempore architecto debitis fuga quia eum commodi sequi illo voluptatum. Odio eaque mollitia tenetur modi, suscipit, nisi perspiciatis voluptatibus dolorem quasi repellendus vero cum laboriosam numquam. Ut soluta inventore voluptates quae nulla perspiciatis nam praesentium tenetur modi, tempore explicabo provident architecto ullam ab reiciendis magnam sequi maxime quibusdam quas a autem aliquid molestiae error veniam? Rem tempore libero sunt harum! Culpa quisquam repellendus ut cupiditate porro aliquam! Quia quidem nam eveniet consequatur quos eum veritatis. Ratione aspernatur deleniti, dolorum nesciunt tempora optio nobis molestiae perferendis, ducimus dicta explicabo corporis voluptas asperiores? Dicta harum alias ullam aperiam rem velit dignissimos, ea accusamus maiores in quos eum nesciunt officiis dolorum quae nostrum ratione voluptatum sit vel modi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat eum blanditiis nesciunt expedita maxime! Quibusdam voluptates aperiam quos laudantium illo suscipit dolores minima dolorum molestiae. Quibusdam, velit eius. Aspernatur nulla veniam excepturi magnam rem vel non, culpa explicabo id, harum labore deserunt eligendi eius architecto dolores enim similique praesentium! Consequatur aspernatur nisi soluta laborum nostrum officiis illo rem, commodi cupiditate, perspiciatis sunt libero ipsa quasi sapiente quae facere blanditiis ut iure suscipit deleniti quod? Fugit, id? Sequi, maiores ipsa. Voluptate optio maxime et neque, nesciunt commodi autem magnam ipsum tenetur consectetur iste eius nisi excepturi facere ullam, nam animi doloremque illo quo. Neque, quam, ut doloremque tempora placeat aliquid nulla illum atque sequi itaque modi magnam reiciendis quidem magni vero est dolorum repudiandae vitae doloribus, totam expedita quae id delectus. Ratione impedit placeat provident, distinctio exercitationem dolorem alias rem esse consectetur, doloribus unde aut. Rem, officia. Eligendi, culpa. Sint ipsam accusantium voluptatibus quis cum magnam rem eaque veritatis aut quia commodi voluptas, tempore distinctio exercitationem ab aperiam porro omnis vel repellat? Cum nam repellendus dignissimos consequatur sed excepturi, quo consequuntur quam nemo quasi porro dicta dolorum ex aspernatur nostrum corrupti inventore doloribus nisi deserunt asperiores! Officia sed, ex explicabo quod dolores earum rerum. Architecto fugiat tenetur nesciunt nulla id vel beatae autem, ratione iure, ea sed eligendi nostrum ut ipsa praesentium accusamus aut laboriosam. Necessitatibus dolores dolor magnam dolorum saepe. Consectetur dignissimos porro sit odit cupiditate doloremque ut. Ut a voluptates reprehenderit facilis esse reiciendis omnis debitis vitae dolor error pariatur, ea accusantium dignissimos itaque unde asperiores impedit sint fugiat quos ratione, consequuntur nisi? Commodi veniam corporis voluptate atque quibusdam sed odit, molestiae id soluta ea, exercitationem suscipit fuga qui velit ratione. Commodi voluptatibus consequatur quo. Inventore, magnam. Tenetur impedit voluptates totam nisi, quasi, accusamus velit quis sit vel maxime tempora officiis nam inventore nihil obcaecati eum accusantium dolores modi sed amet ut natus architecto praesentium. Deserunt quos delectus velit officiis aliquid hic fugiat cupiditate accusantium eum iste dignissimos dolores impedit reiciendis ad quod, nisi itaque sit recusandae animi non modi eveniet explicabo facere! Ex quibusdam reiciendis eaque illo iusto ipsam praesentium labore, minus repellendus. Nesciunt quam corporis dolorum eos voluptas praesentium iste omnis dolor sit mollitia quia magni numquam saepe veritatis rem culpa molestias amet vitae fugiat, tempore odit? Tenetur, odio. Error veritatis, tempore architecto debitis fuga quia eum commodi sequi illo voluptatum. Odio eaque mollitia tenetur modi, suscipit, nisi perspiciatis voluptatibus dolorem quasi repellendus vero cum laboriosam numquam. Ut soluta inventore voluptates quae nulla perspiciatis nam praesentium tenetur modi, tempore explicabo provident architecto ullam ab reiciendis magnam sequi maxime quibusdam quas a autem aliquid molestiae error veniam? Rem tempore libero sunt harum! Culpa quisquam repellendus ut cupiditate porro aliquam! Quia quidem nam eveniet consequatur quos eum veritatis. Ratione aspernatur deleniti, dolorum nesciunt tempora optio nobis molestiae perferendis, ducimus dicta explicabo corporis voluptas asperiores? Dicta harum alias ullam aperiam rem velit dignissimos, ea accusamus maiores in quos eum nesciunt officiis dolorum quae nostrum ratione voluptatum sit vel modi.</p>
                    </div>
                </div>
            </div>  
        </div>
    </Layout>
)

export default connect()(Index)