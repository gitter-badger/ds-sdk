﻿using System;
using System.Collections.Generic;

namespace Dime.Scheduler.Sdk
{

    public class ExchangeImportRequest : IImportRequestable
    {
        public long AppointmentId { get; set; }

        public DateTime Start { get; set; }

        public DateTime End { get; set; }

        public string Subject { get; set; }

        public string Body { get; set; }

        public string Importance { get; set; }

        public string ResourceEmail { get; set; }

        public ImportRequest ToImportRequest()
            => new ImportRequest(
                "mboc_upsertExchangeAppointment",
                new List<string>
                {
                    "AppointmentId",
                    "Start",
                    "End",
                    "Subject",
                    "Body",
                    "Importance",
                    "ResourceEmail"
                    }.ToArray(),
                new List<string>
                {
                    AppointmentId.ToString(),
                    Start.ToString("s") + "",
                    End.ToString("s") + "",
                    Subject,
                    Body,
                    Importance,
                    ResourceEmail
                }.ToArray());

        public static implicit operator ImportRequest(ExchangeImportRequest request)
            => request.ToImportRequest();
    }
}