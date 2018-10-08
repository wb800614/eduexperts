using System;
using System.Collections.Generic;

namespace eduexperts.Models
{
    public partial class Account
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] Password { get; set; }
    }
}
