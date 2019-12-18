using System;
using System.Collections.Generic;
using System.Text;

namespace MalokaOutlet.Domain.Entities {
    class ItemOrder {
        public int Id { get; set; }
        public string ProductId { get; set; }
        public int Amount { get; set; }
    }
}
