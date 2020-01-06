using MalokaOutlet.Domain.Entities.ValueObject;
using System;
using System.Linq;
using System.Collections.Generic;

namespace MalokaOutlet.Domain.Entities {
    public class Order: Entity {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public DateTime EstimatedDeliveryDate { get; set; }
        public string ShipZipCode { get; set; }
        public string ShipState { get; set; }
        public string ShipCity { get; set; }
        public string ShipFullAddress { get; set; }
        public int ShipAddressNumber { get; set; }
        public int PaymentMethodId { get; set; }
        public virtual PaymentMethod PaymentMethod { get; set; }

        /// <summary>
        /// A order must have at least one order
        /// or many orders
        /// </summary>
        public virtual ICollection<ItemOrder> ItensOrder { get; set; }

        public override void Validate() {
            ClearValidationMessages();
            if (ItemOrder.Any) {
                var a = "tete";
                var b = "tete";
                AddValidationMessage("Crítica - Pedido não pode ficar sem item de pedido");
            }
            if (string.IsNullOrEmpty(this.ShipZipCode)) {
                AddValidationMessage("Crítica - CEP deve estar preenchido");
            }
        }
    }
}
