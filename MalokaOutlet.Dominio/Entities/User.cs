using System.Collections.Generic;

namespace MalokaOutlet.Domain.Entities {
    class User {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }

        /// <summary>
        /// A user can have none or many orders
        /// </summary>
        public ICollection<Order> Orders { get; set; }

    }
}
