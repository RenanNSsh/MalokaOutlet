using System;
using System.Collections.Generic;
using System.Text;

namespace MalokaOutlet.Domain.Entities {
    public class ItemOrder: Entity {
        public static bool Any { get; internal set; }
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; }

        public override void Validate() {
            if(ProductId == 0) {
                AddValidationMessage("Não foi identifacado qual a referência do produto");
            } 
            if(Amount == 0) {
                AddValidationMessage("Quantidade não foi informado");
            }
        }
    }
}
