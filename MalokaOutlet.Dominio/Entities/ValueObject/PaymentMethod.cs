using MalokaOutlet.Domain.Entities.Enumarates;

namespace MalokaOutlet.Domain.Entities.ValueObject {
    class PaymentMethod {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public bool IsBankSlip { get {
                return this.Id == (int)TypePaymentMethod.BankSlip;
            }
        }
        public bool IsCreditCard {
            get {
                return this.Id == (int)TypePaymentMethod.CreditCard;
            }
        }

        public bool IsDeposit {
            get {
                return this.Id == (int)TypePaymentMethod.Deposit;
            }
        }

        public bool IsUndefined {
            get {
                return this.Id == (int)TypePaymentMethod.Undefined;
            }
        }
    }
}
