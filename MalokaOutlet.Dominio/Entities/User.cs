using System.Collections.Generic;

namespace MalokaOutlet.Domain.Entities {
    public class User: Entity {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }

        public bool IsAdmin { get; set; }
        /// <summary>
        /// A user can have none or many orders
        /// </summary>
        public virtual ICollection<Order> Orders { get; set; }

        public override void Validate() {
            if (string.IsNullOrEmpty(this.Email)) {
                AddValidationMessage("Email não foi informado");
            }

            if (string.IsNullOrEmpty(this.Password)) {
                AddValidationMessage("Senha não foi informado");
            }
        }
    }
}
