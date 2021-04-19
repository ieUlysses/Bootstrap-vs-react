import Carousel from '../components/Carousel';


import './Home.css';



let products = [
    {
        id: 'p1',
        title: 'Iphone 13',
        details: 'Lorem Ipsum ....',
        imgSrc: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80',
        text: 12000
    },
    {
        id: 'p2',
        title: 'Apple Set',
        details: 'Lorem Ipsum ....',
        imgSrc: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        text: 3000
    },
    {
        id: 'p3',
        title: 'Airpods',
        details: 'Lorem Ipsum ....',
        imgSrc: 'https://images.unsplash.com/photo-1516163109866-e9d98630a0a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        text: 200
    }

];

//let cart = ;

export default function () {



    let cards = products.map(
        product => <Carousel

            text={product.text}
            title={product.title}
            imgSrc={product.imgSrc}
        />
    );



    /* <ProductList newCart = {newCart}/> */
    return (
        <div className="App">

            <main>
                {cards}
            </main>

        </div>
    );
}
