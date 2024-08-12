interface IProduct {
    Name: string;
    Price : number;
    Qty : number;
    Total() :number;
    Print(): void;

}

abstract class ProductTemplate implements IProduct {
    public Name: string='';
    public Price : number=0;
    public Qty : number=0;
    abstract Total(): number;
    abstract Print(): void;

}
// hiding the stucture and providing only functionality -> Abstraction
class ProductComponent extends ProductTemplate {
    Name = "Samsung TV";
    Price = 56000.44;
    Qty = 2;
    Total(){
        return this.Qty * this.Price;
    }
    Print(){
        console.log(`Print Details..`)
    }
}