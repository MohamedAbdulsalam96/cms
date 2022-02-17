frappe.query_reports["Canteen Contractor Payment Report"] = {
	"filters": [
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"reqd": 1,
			"default": frappe.datetime.month_start()
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"reqd": 1,
			"default": frappe.datetime.month_end()
		},
		{
			"fieldname":"plant",
			"label": __("Plant"),
			"fieldtype": "Select",
			"reqd": 1,
			"options": "\nAll\nLAB & PO\nHCD",
			"default": "LAB & PO"
		}
    ]
}