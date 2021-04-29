import ItemList from './ItemList'

const InvoiceInfo:React.FC = () => {
    
    return (
        <div>
            <section>
                <div>
                    <h1>#XMW142</h1>
                    <p>Graphic Design</p>
                </div>
                <div>
                    <p>19 Untuin Terrace</p>
                    <p>London</p>
                    <p>E1 3EZ</p>
                    <p>United Kingdom</p>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <p>Invoice Date</p>
                        <h1>21 Aug 2021</h1>
                    </div>
                    <div>
                        <p>Invoice Date</p>
                        <h1>21 Aug 2021</h1>
                    </div>
                </div>
                <div>
                    <p>Bill To</p>
                    <h1>Alex Grim</h1>
                    <p>84 Church Way</p>
                    <p>Bradfprd</p>
                    <p>BD102PD</p>
                    <p>United Kingdom</p>
                </div>
                <div>
                    <p>Sent to</p>
                    <h1>alexgrim@mail.com</h1>
                </div>
            </section>
            <section>
                <div>
                    <p>Item Name</p>
                    <p>QTY.</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>
                <ItemList />
                <section>
                    <p>Grand Total</p>
                    <h1>£ 456.00</h1>
                </section>
            </section>
        </div>
    )
}

export default InvoiceInfo
