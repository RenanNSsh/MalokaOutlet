using System.Collections.Generic;
using System.Linq;

namespace MalokaOutlet.Domain.Entities {
    public abstract class Entity {
        private List<string> _validationMessages { get; set; }
        private List<string> validationMessages { get {
                return _validationMessages ?? (_validationMessages = new List<string>());
            }
        }

        protected void ClearValidationMessages() {
            validationMessages.Clear();
        }

        protected void AddValidationMessage(string message) {
            validationMessages.Add(message);
        }

        public string GetValidationMessages() {
            return string.Join(". ", validationMessages);
        }

        public abstract void Validate();
        public bool IsValidy {
            get {
                return !validationMessages.Any();
            }
        }
    }
}
