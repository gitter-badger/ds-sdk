﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Dime.Scheduler.Sdk.Import
{
    public class TimeMarker : IImportRequestable, IValidatableImportRequest<TimeMarker>
    {
        [Required]
        [ImportParameter("TimeMarker")]
        public string Name { get; set; }

        [ImportParameter("HexColor", TransactionType.Append)]
        public string Color { get; set; }

        ImportRequest IImportRequestable.ToImportRequest(TransactionType transactionType)
            => transactionType switch
            {
                TransactionType.Append => ((IValidatableImportRequest<TimeMarker>)this).Validate(transactionType).CreateAppendRequest(),
                TransactionType.Delete => ((IValidatableImportRequest<TimeMarker>)this).Validate(transactionType).CreateDeleteRequest(),
                _ => throw new ArgumentOutOfRangeException(nameof(transactionType), transactionType, null)
            };

        private ImportRequest CreateAppendRequest()
            => new ImportRequest(ImportProcedures.TimeMarker.Append, this.CreateParameters(TransactionType.Append));

        private ImportRequest CreateDeleteRequest()
            => new ImportRequest(ImportProcedures.TimeMarker.Delete, this.CreateParameters(TransactionType.Append));

        TimeMarker IValidatableImportRequest<TimeMarker>.Validate(TransactionType transactionType)
            => this.Validate(transactionType);

        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
            => this.Validate<TimeMarker>(validationContext);
    }
}