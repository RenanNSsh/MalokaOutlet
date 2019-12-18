using MalokaOutlet.Domain.Entities.ValueObject;
using System;
using System.Collections.Generic;

namespace MalokaOutlet.Domain.Entities {
    class Order {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public int UserId { get; set; }
        public DateTime EstimatedDeliveryDate { get; set; }
        public string ShipZipCode { get; set; }
        public string ShipState { get; set; }
        public string ShipCity { get; set; }
        public string ShipFullAddress { get; set; }
        public int ShipAddressNumber { get; set; }
        public int PaymentMethodId { get; set; }
        public PaymentMethod PaymentMethod { get; set; }

        /// <summary>
        /// A order must have at least one order
        /// or many orders
        /// </summary>
        public ICollection<ItemOrder> ItensOrder { get; set; }
    }
}
