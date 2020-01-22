namespace MalokaOutlet.Domain.Entities {
    public class Product: Entity {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureName { get; set; }

        public override void Validate() {
            if(Price <= 0) {
                AddValidationMessage("O Produto deve possuir um preço");
            }
       
            if (Name == null || Name == "") {
                AddValidationMessage("O Produto deve possuir um nome");
            }
        }
    }
}
